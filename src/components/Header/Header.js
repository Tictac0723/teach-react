//we need to first import React and the Component class
import React from 'react';
//here we are importing the classes from react-materialize
import { Slider, Slide, Caption, } from 'react-materialize';
//import the images you want to use
import slideOne from '../../assets/slide-1.jpg';
import slideTwo from '../../assets/slide-2.jpeg';
import slideThree from '../../assets/slide-3.jpeg';
import slideFour from '../../assets/slide-4.jpeg';

//here we are setting up our component. This component won't need to handle state or props. So, we will create a functional component here
//You are going to want to name this class the same as you named your folder/js file
function Header () {
        return (
            //keep in mind that in your return, all of your jsx/html has to be wrapped in one containing element. 
            //Here I found a few components from react-materialize that I would like to utilize for my header. So I imported the classes from
            //react-materialize at the top so that I can utilize them in my project.
            <Slider options={{indicators: false, interval: 1500}}>
                <Slide image={<img src={slideOne} alt='text for alt so I do not get yelled at in terminal' />}>
                    <Caption>
                        <h3>
                            This is our big Tagline!
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                            Here's our small slogan.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img src={slideTwo} alt='text for alt so I do not get yelled at in terminal' />}>
                    <Caption placement="left">
                        <h3>
                            Left Aligned Caption
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                            Here's our small slogan.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img src={slideThree} alt='text for alt so I do not get yelled at in terminal' />}>
                    <Caption placement="right">
                        <h3>
                            Right Aligned Caption
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                            Here's our small slogan.
                        </h5>
                    </Caption>
                </Slide>
                <Slide image={<img src={slideFour} alt='text for alt so I do not get yelled at in terminal' />}>
                    <Caption>
                        <h3>
                            This is our big Tagline!
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                            Here's our small slogan.
                        </h5>
                    </Caption>
                </Slide>
            </Slider>
        )
}


//last but not least, we need to export our component so we can use it elsewhere
export default Header;