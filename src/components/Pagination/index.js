import styled from 'styled-components'

export const Pagination =({nextPage, prevPage, goToPage, pages}) => {
    let pageButtons = []
    for(let i = 0; i < pages; i++){
        pageButtons.push(<PageButtons key={i} onClick={ ()=> goToPage(i)}>{i}</PageButtons>)
    }
    return(
        <div>
            {prevPage && <PrevPage onClick={prevPage}>Previous</PrevPage>}
            {pageButtons}
            {nextPage && <NextPage onClick={nextPage}>Next </NextPage>}
        </div>
    )
}

const PageButtons = styled.button`
   margin: 3px;
   width: 35px;
   border-radius: 10px;
`

const PrevPage = styled.button`
   border-radius: 10px;
`

const NextPage = styled.button`
   border-radius: 10px;
`