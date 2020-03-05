import React, { useState, useEffect } from 'react'

import Category from '../Category/Category'
import { Item, List } from './styles'

import { categories as mockCategories } from '../../../api/db.json'

const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)

  const [showFixed, setShowFixed] = useState(false)
  // useEffect( () => {
  //     ( async function fetchData (){
  //         const res = await fetch();
  //         const response = await res.json();
  //         setCategories(response)
  //     })()
  // },[])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }// Se removera el evento cada vez que se renderize o desmonte, con la finalidad de que si se desmonta
    // Este no tenga que estar escuchando el evento y se genere un 'leak' de memoria
  }, [showFixed])// En este caso la dependencia seria ShowFixed por que el estado, cada vez que cambie queremos que ejecute esta funcion

  const renderList = (fixed) => {
    return <List fixed={fixed}>
      {
        categories.map((category, index) => {
          return <Item key={category.id}>
            <Category {...category} />
                 </Item>
        })
      }
           </List>
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}

export default ListOfCategories
