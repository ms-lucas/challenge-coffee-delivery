import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { Success } from '../pages/Success'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}