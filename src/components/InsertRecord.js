import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {post, get} from "../config/requisitions";
import ImageCropper from "../components/ImageCropper";
import LookupField from "../components/LookupField/LookupField";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-toastify/dist/ReactToastify.css';

function InsertRecord(props){
    const [loading, setLoading] = useState(false)

    const fields = props.configurations.fields
    const columns = props.configurations.columns
    const objectName = props.configurations.o_label
    const endpoint_save = props.configurations.endpoints.save
    const endpoint_get = props.configurations.endpoints.get
    const endpoint_update = props.configurations.endpoints.update

    //props need to have conf attribute
    const [arrays, setArrays] = useState([])
    const [rownum, setRownum] = useState(0)
    const [forView, setForView] = useState(false)
    const [isHovering, setIsHovering] = useState(false);
    const [objectId, setObjectId] = useState(props.objectId ? props.objectId: undefined);


    const [object, setObject] = useState({})
    const [existsObject, setExistsObject] = useState({})

    useEffect(() => {
        setArrays(separateFieldsByColumns(fields, columns))
        setRownum(separateFieldsByColumns(fields, columns).length)

        
        if(objectId){
            get(endpoint_get+'/'+objectId).then(resultObj=>{
                console.log("Result ", resultObj)
                setExistsObject(resultObj)
                setObject({"id":resultObj.id})
                setForView(true)
            }).catch(error=>{
                console.log("Erro ", error)
            })
    
        }
    }, []);

    const fieldRender = (f)=>{
        if(!f) return "";
        
        let field = (<input id={f.f_name} class="form-control" name={f.f_name} type={f.f_type} onChange={e=>buildObject(e)} defaultValue={existsObject[f.f_name] ? existsObject[f.f_name]: ''}/>)

        if(f.f_format){
            switch(f.f_format){
                case "image":
                    field = (<ImageCropper/>)
                    break;
                case "lookup":
                    field = <LookupField forView={forView} field={f} defVal={existsObject[f.f_name]} buildObject={e=>buildObject(e)}/>
                    break;
            } 
        }

        if(forView){
            field = (
                    <label class="mb-1" id={f.f_name} name={f.f_name} style={{'width': '100%', 'display':'flex'}}>
                        <b style={{'margin-right': 'auto'}}>
                            {
                                existsObject[f.f_name] ? 
                                
                                (typeof existsObject[f.f_name]  === "object")? existsObject[f.f_name].name:existsObject[f.f_name]

                                : ''
                                

                            }
                            {}
                        </b>
                        <span class="icon-wrapper" style={{'position': 'relative'}}>
                            <FontAwesomeIcon class="icon" style={{'color': 'gray', 'width':'16px', 'align-self':'center', 'opacity': isHovering ? '1':'0', 'transition': 'opacity 0.1s'}} icon={faPenToSquare} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={(e)=>{setForView(false)}}/>
                        </span>
                    </label>

                )
        }

        return (
                <>
                    <label for={f.f_name} style={{color:'gray'}}>{f.f_label}</label>
                    <br/>
            
                    {field}
                </>
                
            )
    }

    return (
        <div>
            {props.showTitle ? <h3>{objectName}</h3> :''}

            <div className="container">
                {
                    Array(rownum).fill().map((_, row_i) => (
                        <div class="row">
                            {
                                Array(columns).fill().map((_, col_i) => (
                                    <div class="col-sm">
                                        {fieldRender(arrays[row_i][col_i])}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                <br/>
                {forView ? '':<button class="btn btn-primary" onClick={()=>{saveObject()}}>Salvar</button>}

            </div>

        </div>
    )

    function saveObject(){
        console.log("Object to save", object)
        console.log("Save on ", endpoint_save)

        var end =  object.id ? endpoint_update: endpoint_save;
        
        post(end, object).then(savedObj=>{
            toast.success("Salvo com sucesso 😍!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                });
                setExistsObject(savedObj);
                setForView(true)


            }).catch(error=>{
                toast.error("Erro ao salvar 😥!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setForView(false)

            })

    }

    function buildObject(e){
        let obj = object
        obj[e.target.name] = e.target.value

        setObject(obj)
    }

    function separateFieldsByColumns(fields, columns) {
        const rows = [];
        let currentRow = [];
      
        fields.forEach(field => {
          currentRow.push(field);
      
          if (currentRow.length === columns) {
            rows.push(currentRow);
            currentRow = [];
          }
        });
      
        if (currentRow.length > 0) {
          rows.push(currentRow);
        }
        console.log("ROWS", rows)
      
        return rows;
    }
}

export default InsertRecord;
