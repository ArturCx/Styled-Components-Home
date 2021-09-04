import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;
`

const ContentItem = styled.p `
color #000;
text-align: center;
font-family: "Arial";
with: 250px;
background-color: #8793;
padding: 10px;
box-sizing: border-box;
margin: 40px;
`

export default function content() {
    return (
        <React.Fragment>
            <Content>
                <ContentItem>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim. Imperdiet nulla malesuada pellentesque elit eget gravida cum.sed turpis tincidunt id aliquet risusi qu.</p>
                </ContentItem>
                <ContentItem>
                <p>Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Tellus elementum sagittis vitae et. Eu consequat ac felis donec et odio pellentesque diam volutpat. Convallis a cras semper auctor neque vitae tempus quam. Nulla posuere sollicitudin aliquam ultrices sagittis orci.</p>
                </ContentItem>
            </Content>
        </React.Fragment>
    );
}