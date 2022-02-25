import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: auto;
    border: solid 1px grey;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    box-shadow: -10px 8px 9px 5px rgba(87,87,87,0.86);
`
const AlbumDiv = styled.div`
    display: flex;
    width: 100%;
    height: auto;
`

const DescriptionDiv = styled.div`
    width: 70%;
    height: auto;
`
const DescriptionP = styled.p`
    font-size: .5 rem;
`
const BoldSpan = styled.span`
    font-weight: bolder;
`
const CoverDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 30%;
    height: auto;
`
const CoverImg = styled.img`
    width: 15rem;
`
const ReviewLikeDiv = styled.div`
     width: 90%;
     display: flex;
     justify-content: space-between;
     margin: 1.5rem;
`
const likeImg = styled.img`
    width: 3rem;
`
const LikeDiv = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-evenly;
`
const LikeDivMues = styled.div`
    width: 3rem;
    border: solid 1px black;
`
const ReviewButton = styled.button`
    width: 8rem;
    border-radius: 1rem;
    border: none;
    background-color: grey;
    cursor: pointer;
    margin-right: 2.5rem;
    padding: .5rem;
`
const UserReviewDiv = styled.div`
    width: 100%;
    height: auto;
`



const CardTable = (props) => {
  return (
    <MainDiv>
        <AlbumDiv>
            <DescriptionDiv>
                <DescriptionP><BoldSpan>Artist: </BoldSpan>{props.artist}</DescriptionP>
                <DescriptionP><BoldSpan>Album: </BoldSpan>{props.album}</DescriptionP>
                <DescriptionP><BoldSpan>Year: </BoldSpan>{props.year}</DescriptionP>
                <DescriptionP><BoldSpan>Description: </BoldSpan>{props.description}</DescriptionP>
            </DescriptionDiv>
            <CoverDiv>
                <CoverImg alt='cover' src={props.cover}/>
            </CoverDiv>

        </AlbumDiv>
        <ReviewLikeDiv>
            <LikeDiv>
                <LikeDivMues>L</LikeDivMues>
                <LikeDivMues>U</LikeDivMues>
            </LikeDiv>
            <ReviewButton>Add review</ReviewButton>
        </ReviewLikeDiv>
        <UserReviewDiv>

        </UserReviewDiv>
    </MainDiv>
  )
}

export default CardTable