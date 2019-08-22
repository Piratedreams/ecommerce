import React from 'react'


class Lookbooks extends React.Component {

    render() {
        // creating a hover zoom on lookbook photos
        const zoomLookBook = async = (e) => {
            try{

            } catch (err) {
                console.log(err);
                return err;
            }

        }
        // maybe add an option click in order to buy photos


        return (
            <div>
                <ul name='first-lookbook'>
                    <li name='lookbook-photo' img='#'></li>
                    <li name='lookbook-photo' img='#'></li>
                    <li name='lookbook-photo' img='#'></li>
                    <li name='lookbook-photo'img= '#'></li>
                </ul>
            </div>
        )
    }

}






export default Lookbooks