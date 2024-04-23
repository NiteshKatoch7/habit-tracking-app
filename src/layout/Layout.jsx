import React from 'react'
import { ContentContainer, HomeController } from './LayoutStyle'
import { Col, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <HomeController>
        <ContentContainer>
            <Row className='w-100'>
                <Col>
                    <div className="content-container">
                        <h1 className="project-title">
                            Habit Tracker App
                        </h1>
                        <button className="add-habit-btn">
                            <FaPlus /> Add Habit
                        </button>
                    </div>
                </Col>
            </Row>
            <Row className='w-100 h-100'>
                <Col md="5">

                </Col>
                <Col md="7">
                    <Outlet />
                </Col>
            </Row>
        </ContentContainer>
    </HomeController>
  )
}
