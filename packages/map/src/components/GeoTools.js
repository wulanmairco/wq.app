import React from 'react';
import { useComponents, useInputComponents } from '@wq/react';
import { useMinWidth } from '@wq/material';
import { useGeoTools } from '../hooks';
import PropTypes from 'prop-types';

export default function GeoTools({ name, type }) {
    const { toggleProps, setLocation, ActiveTool, value } = useGeoTools(
            name,
            type
        ),
        { View } = useComponents(),
        { Toggle } = useInputComponents(),
        singleRow = useMinWidth(480);

    if (singleRow) {
        return (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <View style={{ marginRight: 8, minWidth: 200 }}>
                    <Toggle {...toggleProps} />
                </View>
                <ActiveTool
                    name={name}
                    value={value}
                    type={type}
                    setLocation={setLocation}
                />
            </View>
        );
    } else {
        return (
            <>
                <View>
                    <Toggle label="Location Mode" {...toggleProps} />
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 8,
                        width: '100%'
                    }}
                >
                    <ActiveTool
                        name={name}
                        value={value}
                        type={type}
                        setLocation={setLocation}
                    />
                </View>
            </>
        );
    }
}

GeoTools.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
};
