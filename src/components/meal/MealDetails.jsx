import React from "react";
import classes from './MealDetails.module.css'
import { useParams  } from "react-router-dom";
 

const MealDetails = () => {
    const {id} = useParams();
    return (
        <section className={classes.meal}>
            <p>{id}</p>
            <div className={classes.meal__info}>
                <div className={classes.meal__info__txt}>
                    <div className={classes.meal__info_general}>
                        <p className={classes.meal__heading}></p>
                        <a className={classes.meal__name} href="">Beef Rendang</a>
                        <p>
                            <span className={classes.meal__category}>Beef</span> | <span className={classes.meal__area}>Malaysian</span>
                        </p>
                    </div>
                    <ul className={classes.meal__ingredients}>
                        <li> Beef <span className={classes.measure}>1lb</span></li>
                        <li>Vegetable Oil <span className={classes.measure}>5 tbs</span></li>
                        <li>Cinnamon Stick <span className={classes.measure}>1</span></li>
                        <li>Cloves <span className={classes.measure}>3</span></li>
                    </ul>
                </div>
                <div className={classes.meal__media}>
                    <img className={classes.meal__img} src='https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg' alt='Beef Rendang'/>
                </div>
            </div>

            <div className={classes.mealInstructions}>
                <p className={classes.mealInstructions__heading}>Instruction</p>
                <p className={classes.mealInstructionTxt}>Chop the spice paste ingredients and then blend it in a food processor until fine.
 Heat the oil in a stew pot, add the spice paste, cinnamon, cloves, star anise, and cardamom and stir-fry until aromatic. Add the beef and the pounded lemongrass and stir for 1 minute. Add the coconut milk, tamarind juice, water, and simmer on medium heat, stirring frequently until the meat is almost cooked. Add the kaffir lime leaves, kerisik (toasted coconut), sugar or palm sugar, stirring to blend well with the meat.
 Lower the heat to low, cover the lid, and simmer for 1 to 1 1/2 hours or until the meat is really tender and the gravy has dried up. Add more salt and sugar to taste. Serve immediately with steamed rice and save some for overnight.'</p>
                <button className={classes.btnYoutube}><a href='https://www.youtube.com/watch?v=Ot-dmfBaZrA'>Watch on YouTube</a></button>
            </div>
            
        </section>
    );
}

export default MealDetails;