import styled from "styled-components";


export const HomeController = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF5634;
`;

export const ContentContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 90%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: start;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .content-container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .project-title{
            font-weight: 800;
            color: #FF0000;
        }

        .add-habit-btn{
            min-width: 160px;
            padding: 10px 24px;
            border-radius: 12px;
            background: #FF0000;
            font-size: 20px;
            font-weight: 600;
            border: 0;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0 10px;
        }
    }
`;