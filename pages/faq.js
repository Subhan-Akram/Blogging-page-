import React from 'react'
import Faq from "react-faq-component";
import data from "../lib/faq.json"

const styles = {
    // bgColor: 'white',
    titleTextColor:"#2c2c51",
    
    rowTitleColor: "#2c2c51",
    rowContentColor: '#677294;',
    // arrowColor: "red",
    titleText:"100px"
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

function faq() {
  return (
    <div className='faq bd_red container_home'>
       <Faq
                data={data}
                styles={styles}
                config={config}
            />
    </div>
  )
}

export default faq