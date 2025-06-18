import { Outlet } from 'react-router-dom'
import { Header } from "../../components/Header";
import { Fragment } from 'react/jsx-runtime';
import { ContentWrapper } from './styles';

export function DefaultLayout() {
    return (
        <Fragment>
            <ContentWrapper>
                <Header />
                <Outlet />
            </ContentWrapper>
        </Fragment>
    )
}