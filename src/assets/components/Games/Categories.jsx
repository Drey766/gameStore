import React, { useState } from 'react'
import './Categories.css'
import { useStateValue } from '../contextApi/StateProvider'
import { Close, Menu } from '@mui/icons-material'


function Categories() {
    const [category, setCategory] = useState('All')
    const [platform, setPlatform] = useState('')
    const [menuActive, setMenuActive] = useState(false)
    console.log('cat',category)
    console.log('plat',platform)

    const [{basket}, dispatch] = useStateValue()
    const handleMenu = () => {
        setMenuActive(!menuActive)
    }



    const handleCategory = (...cats) => {
        let category;
        if (cats.length === 1 && typeof cats[0] === 'string') {
          category = cats[0];
        } else if (cats.length > 1) {
          category = cats.flat();
        } else {
          category = '';
        }
        setCategory(category);
        dispatch({
          type: 'SET_CATEGORY',
          item: category,
        });
        console.log(category)
      };

      
      console.log(category)

    
    
  return (
    <div className={menuActive ? 'categories active' : 'categories'}>
      <span className="category__spanButton" onClick={handleMenu}>Categories {menuActive ? <Close /> : <Menu />} </span>
        <div className="categories__cont">
            <div className="category__divs1">
                <h3 className="category__title">Categories</h3>
                <ul className="category__categories">
                    <li className={category === 'All' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('All')}}>All</li>
                    <li className={category === 'Shooter' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Shooter')}}>Shooter</li>
                    <li className={category === 'Fighting' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Fighting')}}>Fighting</li>
                    <li className={category === 'Platform' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Platform')}}>Platform</li>
                    <li className={category === 'Sport' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Sport')}}>Sports</li>
                    <li className={category === 'Racing' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Racing')}}>Racing</li>
                    <li className={category === 'Simulator' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Simulator')}}>Simulator</li>
                    <li className={category === 'Tactical' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Tactical')}}>Tactical</li>
                    <li className={category === 'Point-and-click' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Point-and-click')}}>Point-and-click</li>
                    <li className={category === 'Role-playing (RPG)' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Role-playing (RPG)')}}>Role-playing</li>
                    <li className={category === "Hack and slash/Beat 'em up" ? 'category__category active' : 'category__category'} onClick={() => {handleCategory("Hack and slash/Beat 'em up")}}>Hack and slash</li>
                    <li className={category === 'Adventure' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Adventure')}}>Adventure</li>
                    <li className={category === 'Indie' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Indie')}}>Indie</li>
                    <li className={category === 'Puzzle' ? 'category__category active' : 'category__category'} onClick={() => {handleCategory('Puzzle')}}>Puzzle</li>
                </ul>
            </div>
            <div className="category__divs1">
                <h3 className="category__title">Platforms</h3>
                <ul className="category__platforms">
                    <li className={category.includes('PC (Microsoft Windows)') ? 'category__platform active' : 'category__platform'} onClick={() => {handleCategory('PC (Microsoft Windows)', 'Mac OS', 'Linux')}}>PC</li>
                    <li className={category.includes('PlayStation 3') ? 'category__platform active' : 'category__platform'} onClick={() => {handleCategory('PlayStation Vita','PlayStation 2','PlayStation 3', 'Playstation4', 'Playstation5')}}>PS4</li>
                    <li className={category.includes('Xbox one') ? 'category__platform active' : 'category__platform'} onClick={() => {handleCategory('Xbox Series X|S', 'Xbox one', 'Xbox 360')}}>X Box One</li>
                    <li className={category.includes('Nintendo Switch') ? 'category__platform active' : 'category__platform'} onClick={() => {handleCategory('Super Nintendo Entertainment System', 'New Nintendo 3DS', 'Nintendo Switch', 'Wii U')}}>Nintendo</li>
                    <li className={category.includes('Android') ? 'category__platform active' : 'category__platform'} onClick={() => {handleCategory('Android', 'iOS')}}>Mobile</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Categories