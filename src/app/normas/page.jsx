"use client";
import React from 'react';
import { motion } from "framer-motion";
import Normas from '@/components/03_interfaz_normas/Normas';
import NavBar from '@/components/NavBar';

function page() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <NavBar />
                <div className='mt-20 mb-20'>
                    <Normas />
                </div>

            </motion.div>
        </>
    )
}

export default page