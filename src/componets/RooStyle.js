import { createComponent } from 'react-fela'

const background = () => ({
    position: "fixed",
   top: 50+'%',
   left: 50+'%',
   transform: 'translate(-50%, -50%)'
});

export const Background = createComponent(background, 'div');
const spanColor = () => ({
    // position: 'relative',
    width: 70+'%',
    height: 50+'px',
    color: 'black',
    background: 'yellow',
    padding: '3%',
    fontSize: '20px',
    border: 0,
    borderRadius: '7px',
    marginTop: '2%'

});
export const ButtonStyle = createComponent(spanColor, 'button');