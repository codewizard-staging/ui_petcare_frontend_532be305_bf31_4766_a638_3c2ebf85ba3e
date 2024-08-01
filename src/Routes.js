import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenterList, 
PetCareCenterInfoForm, 
PetServiceInfoForm, 
PetServiceTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
            
                <Route path="/list" element={<PetCareCenterList {...props} title={'List'} />} />
                <Route path="/listform" element={<PetCareCenterInfoForm {...props} title={'List-Info'} />} />
                <Route path="/tiles" element={<PetServiceTiles {...props} title={'Tiles'} />} />
                <Route path="/tilesform" element={<PetServiceInfoForm {...props} title={'Tiles-Info'} />} />
        </Routes>
    )

};

export default Component;