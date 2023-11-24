import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import MealPage from "./Pages/MealPage";
import IngredientPage from "./Pages/IngredientPage";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/meal/:idMeal" element={<MealPage/>}/>
            <Route path="/ingredient/:name" element={<IngredientPage/>}/>
        </Routes>
    )

}

export default App;