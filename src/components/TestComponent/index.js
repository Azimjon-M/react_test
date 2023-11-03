import React from 'react';

const Test = () => {

    const dataT = [
        {id: 10, name: "Kunduzgi"},
        {id: 11, name: "Kechki"},
        {id: 12, name: "Sirtqi"},
    ]; 

    const dataF = [
        {id: 21, Tid: 10, name: "Matematika"},
        {id: 22, Tid: 10, name: "Fizka"},
        {id: 23, Tid: 11, name: "Onatili"},
        {id: 24, Tid: 11, name: "Adabiyot"},
        {id: 25, Tid: 12, name: "Tarix"},
        {id: 26, Tid: 12, name: "Manaviyat"},
    ];

    const dataY = [
        {id: 32, Tid: 10, Fid: 21, name: "Mat Yon 1"},
        {id: 33, Tid: 10, Fid: 21, name: "Mat Yon 2"},
        {id: 34, Tid: 10, Fid: 22, name: "Fiz Yon 1"},
        {id: 35, Tid: 10, Fid: 22, name: "Fiz Yon 2"},
        {id: 36, Tid: 11, Fid: 23, name: "Ona Yon 1"},
        {id: 37, Tid: 11, Fid: 23, name: "Ona Yon 2"},
        {id: 38, Tid: 11, Fid: 24, name: "Adab Yon 1"},
        {id: 39, Tid: 11, Fid: 24, name: "Adab Yon 2"},
        {id: 40, Tid: 12, Fid: 25, name: "Tar Yon 1"},
        {id: 41, Tid: 12, Fid: 25, name: "Tar Yon 2"},
        {id: 42, Tid: 12, Fid: 26, name: "Man Yon 1"},
        {id: 43, Tid: 12, Fid: 26, name: "Man Yon 2"},
    ]
    const dataK = [
        {id: 50, Tid: 10, Fid: 21, Yid: 32, name: "Mat Yon 1 Kurs 1"},
        {id: 51, Tid: 10, Fid: 21, Yid: 32, name: "Mat Yon 1 Kurs 2"},
        {id: 52, Tid: 10, Fid: 21, Yid: 33, name: "Mat Yon 2 Kurs 1"},
        {id: 53, Tid: 10, Fid: 21, Yid: 33, name: "Mat Yon 2 Kurs 2"},
        {id: 54, Tid: 10, Fid: 22, Yid: 34, name: "Fiz Yon 1 Kurs 1"},
        {id: 55, Tid: 10, Fid: 22, Yid: 34, name: "Fiz Yon 1 Kurs 2"},
        {id: 56, Tid: 10, Fid: 22, Yid: 35, name: "Fiz Yon 2 Kurs 1"},
        {id: 57, Tid: 10, Fid: 22, Yid: 35, name: "Fiz Yon 2 Kurs 2"},
        {id: 58, Tid: 11, Fid: 23, Yid: 36, name: "Ona Yon 1 Kurs 1"},
        {id: 59, Tid: 11, Fid: 23, Yid: 36, name: "Ona Yon 1 Kurs 2"},
        {id: 60, Tid: 11, Fid: 23, Yid: 37, name: "Ona Yon 2 Kurs 1"},
        {id: 61, Tid: 11, Fid: 23, Yid: 37, name: "Ona Yon 2 Kurs 2"},
        {id: 62, Tid: 11, Fid: 24, Yid: 38, name: "Adab Yon 1 Kurs 1"},
        {id: 63, Tid: 11, Fid: 24, Yid: 38, name: "Adab Yon 1 Kurs 2"},
        {id: 64, Tid: 11, Fid: 24, Yid: 39, name: "Adab Yon 2 Kurs 1"},
        {id: 65, Tid: 11, Fid: 24, Yid: 39, name: "Adab Yon 2 Kurs 2"},
        {id: 66, Tid: 12, Fid: 25, Yid: 40, name: "Tar Yon 1 Kurs 1"},
        {id: 67, Tid: 12, Fid: 25, Yid: 40, name: "Tar Yon 1 Kurs 2"},
        {id: 68, Tid: 12, Fid: 25, Yid: 41, name: "Tar Yon 2 Kurs 1"},
        {id: 69, Tid: 12, Fid: 25, Yid: 41, name: "Tar Yon 2 Kurs 2"},
        {id: 70, Tid: 12, Fid: 26, Yid: 42, name: "Man Yon 1 Kurs 1"},
        {id: 71, Tid: 12, Fid: 26, Yid: 42, name: "Man Yon 1 Kurs 2"},
        {id: 72, Tid: 12, Fid: 26, Yid: 43, name: "Man Yon 2 Kurs 1"},
        {id: 73, Tid: 12, Fid: 26, Yid: 43, name: "Man Yon 2 Kurs 2"},
    ];

    return (
        <div>Test</div>
    )
}

export default Test;