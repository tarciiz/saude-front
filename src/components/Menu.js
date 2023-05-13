import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { getUser} from '../config/session';
import { Link} from 'react-router-dom';
import {basePath} from '../config/session';


class Menu extends Component {
  render() {
    return (<nav style={{'backgroundColor':'#FFA7A7', 'height':'100%'}} class="shadow">
              <div class="p-3 mb-30">
                <div class="d-flex align-items-center" >
                    <img src={getUser().profilePicture ? getUser().profilePicture.fullPath :"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a146cd5c-bb6b-455b-87bc-669be1ede5cd/daftb87-abaa732f-dbfa-4d78-8c10-87ac128b0bb1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNDZjZDVjLWJiNmItNDU1Yi04N2JjLTY2OWJlMWVkZTVjZFwvZGFmdGI4Ny1hYmFhNzMyZi1kYmZhLTRkNzgtOGMxMC04N2FjMTI4YjBiYjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yqO5cCrD-Ty_D0-SLaFb8RD6FcrgJ97J1pboyS8Igns"} class="rounded-circle" alt="..." width="40px" style={{"maxHeight":"40px"}}/>

                    <p class="text-truncate overflow-hidden m-0">{getUser().name}</p>
                    <a href={basePath+"/profile"}><FontAwesomeIcon style={{'color': '#000', 'width':'10px'}} icon={faChevronRight} /> </a>
                </div>
              </div>

             <ul class="nav flex-column" id="nav">
                <li class="nav-item d-flex">
                  
                  <a class="nav-link active" href={basePath+"/home"} onClick={(e)=>{activeElement(e)}} style={{'color':'#000'}}>
                    <FontAwesomeIcon style={{'color': '#000', 'width':'26px'}} icon={faHome} /> &nbsp;
                    Início
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href={basePath+"/"} onClick={(e)=>{activeElement(e)}} style={{'color':'#000'}}>
                    <FontAwesomeIcon style={{'color': '#000', 'width':'26px'}} icon={faDoorOpen} /> &nbsp;
                    Sair
                  </a>
                </li>
              </ul>
            </nav>
   );
  }
}

function activeElement(event){
    let links = document.getElementById('nav').getElementsByClassName('nav-link')
    for(let link of links){
        link.classList.remove('active')
    }

    let element = event.target
    element.classList.add('active')

}

export default Menu;