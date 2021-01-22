import React from 'react';
import styles from './works-page.module.scss';
import SocialLinks from "../social-links";
import PageHeader from "../page-header";

const WorksPage = () => {
    return (
        <div>
            <PageHeader number="04" name=".works"/>
            <div className={`${styles['empty-page']}`}>
                <p className={`${styles['empty-page__text']}`}>page in development</p>
            </div>
            <SocialLinks/>
        </div>
    );
};

export default WorksPage;