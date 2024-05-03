import styled from "styled-components";


export const HomeController = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e9ecff;

    @media only screen and (max-width: 768px){
        height: 100%;
        padding: 50px 0;
    }
`;

export const ContentContainer = styled.div`
    position: relative;
    width: 80%;
    margin: auto;
    height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: start;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media only screen and (max-width: 768px){
        height: 100%;
        width: 90%;
    }

    .content-container{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .project-title{
            font-weight: 800;
            color: #6054ba;
        }

        .add-habit-btn{
            min-width: 160px;
            padding: 10px 24px;
            border-radius: 12px;
            background: #6054ba;
            font-size: 20px;
            font-weight: 600;
            border: 0;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0 10px;

            @media only screen and (max-width: 768px){
                position: absolute;
                top: 0;
                right: 0;
                transform: translate3d(10%, -50%, 0);
            }
        }
    }
`;