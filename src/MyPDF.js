import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    section: {
        margin: 100,
        padding: 10,
        flexGrow: 1,
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.4
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    centered: {
        position: 'relative',
        padding: 150,
        textAlign: 'center',
        opacity: 1
    }
});

const MyPDF = ({ text }) => {
    return (
        <Document>
            <Page size='A4' orientation='landscape'>
                <Image src='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg' style={styles.image}/>
                <View style={styles.section}>
                    <Text style={styles.centered}>{text}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default MyPDF;