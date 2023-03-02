import React, { useState, useRef, useEffect } from 'react';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Calender = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    return <div>
        <DateRangePicker
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
        />;
    </div>;
};

export default Calender;
