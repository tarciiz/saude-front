import Menu from "../components/Menu";


function BasePage(props){

    return (
    <div class="container-fluid">
        <div class="row" style={{'height': '100vh'}}>
            <div class="col-sm-2 m-0 p-0">
                <Menu/>
            </div>
            <div class="col-sm-10">
                <div class="container">
                    <h4 class="pb-3 pt-3">{props.title}</h4>

                    {props.children}

                </div>
            </div>
        </div>
    </div>)
}

export default BasePage;