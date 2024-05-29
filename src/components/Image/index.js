import {useState, forwardRef} from 'react'
import image from '~/assets/images';



const Image = forwardRef(({ src ,alt,...props}, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = ()=>{
            setFallBack(image.noImage);
    }

    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} {...props} alt={alt} src={fallBack || src} onError={handleError}/>;
})

export default Image;