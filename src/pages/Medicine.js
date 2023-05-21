import React, { useState } from "react";
import BasePage from "./BasePage";
import {getUser} from "../config/session";
import InsertUpdateRecord from "../components/InsertUpdateRecord";
import conf from "../object-config/medicine.json";


function Medicine(){
    var file;


    return (
        <BasePage title="Remédio">
            <div>
                <InsertUpdateRecord showTitle={true} configurations={conf} objectId="89654b3a-f3b6-442a-8982-0d21d86dbe48"/>
            </div>

        </BasePage>
    )
}

export default Medicine;