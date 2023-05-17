import React, { useState } from "react";
import BasePage from "./BasePage";
import {getUser, setUser} from "../config/session";
import {uploadFile, post} from "../config/requisitions";
import ImageCropper from "../components/ImageCropper";
import InsertRecord from "../components/InsertRecord";
import conf from "../object-config/user.json";


function Profile(){
    var file;


    return (
        <BasePage title="Perfil">
            <div>
            <img src={getUser().profilePicture ? getUser().profilePicture.fullPath :"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a146cd5c-bb6b-455b-87bc-669be1ede5cd/daftb87-abaa732f-dbfa-4d78-8c10-87ac128b0bb1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNDZjZDVjLWJiNmItNDU1Yi04N2JjLTY2OWJlMWVkZTVjZFwvZGFmdGI4Ny1hYmFhNzMyZi1kYmZhLTRkNzgtOGMxMC04N2FjMTI4YjBiYjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yqO5cCrD-Ty_D0-SLaFb8RD6FcrgJ97J1pboyS8Igns"} class="rounded-circle" alt="..." width="100px" style={{"maxHeight":"100px"}}/>

            <p class="text-truncate overflow-hidden m-0">{getUser().name}</p>

            <ImageCropper />
            <InsertRecord showTitle={true} configurations={conf}/>
            </div>

        </BasePage>
    )
}

export default Profile;