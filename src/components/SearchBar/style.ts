import styled from "styled-components"

export const SearchBarStyled = styled.div`
    width: 800px;
    height: 50px;
    display: flex;
    background-color: #fff;
    margin-right: 50px;
    margin-left: 50px;
    border: none;
    border-radius: 25px;

        >input {
            width: 90%;
            padding: 0;
            border: none;
            border-radius: 25px;
            height: 48px;
            font-size: 19px;

            &:focus-visible {
                outline: none;
            }
        };

        >img {
            padding: 16px;
        }
`