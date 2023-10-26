'use client'
import React from 'react'
import styles from '../../Styles/Common/buttons.module.scss'

export const ContactUsBtn = () => {
    return <button
        className={styles.contactUs}
        onClick={() => {
            console.log("ContactUsBtn")
        }}
    >
        Contact us
    </button>
}

