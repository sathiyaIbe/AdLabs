/* eslint-disable */
'use client';

import { useEffect } from "react";
import { InlineWidget, PopupWidget, useCalendlyEventListener } from "react-calendly";
const Insights = () =>{
  // useEffect(() => {
  //   window.Calendly.initInlineWidget({
  //     url: 'https://calendly.com/my-calendar/30min?month=2022-05',
  //     parentElement: document.getElementById('calendly-inline-widget')
  //   });
  // }, [])
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
return(
  <section className="flex flex-col mt-24 max-w-[100vw] overflow-hidden min-h-[100vh]">
    
    <div className="w-[80%] flex flex-col self-center">
      <h1 className="calender_header w-[50%] self-center">Book your <span className="font-[500]"> free </span>  10-minute consultation call</h1>
      <InlineWidget url="https://calendly.com/sathiya_" />

    </div>
  </section>
);
}
export default Insights;
