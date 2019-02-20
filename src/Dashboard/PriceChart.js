import highchartsConfig from './HighChartsConfig';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighharts from 'react-highcharts';

export default function(){
    return(
        <AppContext.Consumer>
            {({}) =>
                <Tile>
                    <ReactHighharts config={highchartsConfig()}/>
                </Tile>
            }
        </AppContext.Consumer>
    )
}