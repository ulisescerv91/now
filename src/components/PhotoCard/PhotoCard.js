import React, { useEffect, useRef, useState } from 'react'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { ImgWrapper, Img, Button, Article } from './PhotoCardStyle'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {

    const [liked, setLiked] = useState(false);

    const Icon = liked ? MdFavorite : MdFavoriteBorder;//Para poder cambiar el icono segun este en true or false
    //! es importante que Icon empeize con mayuscula, para que React piense que estamos intentando renderizar un Componente

    const [show, setShow] = useState(false)

    console.log(liked);

    const myRef = useRef(null)

    useEffect(() => {
        Promise.resolve(
            /*
                  * Esto es para el caso que no se necesite descargar 'intersection-observer' no lo haga, por ejemeplo en Chrome no lo descaga por que es compatible,
                  * Pero en IE si lo descargara
                  */
            (typeof window.IntersectionObserver !== undefined)
                ? window.IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            const myObserver = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0]// propiedad que nos dira si el elm esta en el viewport o no
                if (isIntersecting) {
                    setShow(true)// Mostrar el elemento
                    myObserver.disconnect()// Para que no se actualze  a false la propiedad  'isIntersecting' cuando se salga del view port
                }
            })// este recibe todas las entradas que estan en el vie
            myObserver.observe(myRef.current) // se le pasa como parametro el elemento que queremos observar. (cada article)
        })
    }, [myRef])// Se ejecutara solo cuando cambia la referencia

    //! ! IMPORTANTE
    /**
       * Para que funcione. se le agrego un min-heith de 100px al elemento de article.
       * ya que si no, entonces la primera vez que carga todos los componentes como no tienen nada, entonces todos esta en el Viewpoert por lo tanto isIntersecting  desde principio es TRUE
       * y al ponerle el 100px entonces solo los primeros apareceran y los demas tienen isIntersecting como falso ya que solo cambiara hasta que se les haga ell scroll
       */

    /**
       * IntersectionObserver  - No es compatible en IE por lo tanto se requiere que se instale 'intersection-observer'
       */

    return (
        <Article ref={myRef}>
            {
                show && <>

                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt='Pet' />
                        </ImgWrapper>
                    </a>
                    <Button onClick={() => { setLiked(!liked) }}>
                        <Icon size='32px' />{likes} likes!
          </Button>
                </>
            }
        </Article>
    )
}

export default PhotoCard
