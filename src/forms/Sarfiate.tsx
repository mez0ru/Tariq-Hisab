import React from 'react'
import { Form } from '../components/Form'
import { HandleSubmit } from '../components/HandleSubmit'

export default function Sarfiate() {
    return (
        <Form submitEvent={(e) => HandleSubmit(e, 1)}>
            <h2>صرفيات</h2>
            <label>
                نوع الصرفية
                <input type="text" placeholder='whatever' />
            </label>
            <label>
                المبلغ
                <input type="number" placeholder='whatever' />
            </label>
            <label>
                الدرج / الخزنة
                <input type="text" placeholder='whatever' />
            </label>
        </Form>
    )
}
