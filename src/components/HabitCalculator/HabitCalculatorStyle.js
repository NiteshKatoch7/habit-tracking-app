import styled from "styled-components";

export const HabitWrapper = styled.div`
    border: 5px dashed #FF5634;
    max-height: 540px;
    height: 100%;
    align-self: center;
    border-radius: 16px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    overflow: auto;

    &::-webkit-scrollbar{
      width: 0px;
    }
  
    &::-webkit-scrollbar-track{
      width: 12px;
      background-color: #fff;
      border-radius: 12px;
    }
  
    &::-webkit-scrollbar-thumb{
      padding: 0 3px;
      width: 8px;
      background-color: lightgrey;
      border-radius: 12px;
    }

    .content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        font-size: 16px;
        font-weight: 500;
        color: #D3D3D3;
    }
`;


export const CalculatorWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 30px 0px;

    .card{
        background: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border: 0;
        width: 250px;

        .card-header{
            background: #FF5634;
            color: #fff;
            display: flex;
            justify-content: space-between;

            p{
                color: #fff;
                margin: 0;
            }
        }

        .card-body{
            display: flex;
            justify-content: space-around;
            align-items: center;

            .icon{
                width: 30px;
                height: 30px;
                display: block;
                border-radius: 100%;
                background: #D3D3D3;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

                &.active{
                    &.icon-danger{
                        background: red;
                    }
                    &.icon-success{
                        background: green;
                    }
                    &.icon-set{
                        background: white;
                        color: black;
                    }
                }
            }
        }
    }
`;