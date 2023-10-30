/* eslint-disable */
'use client';

import AccordItem from "../components/Js/AccordItem";

const Feedback = () => (
  <section className="  flex flex-col pb-11">
    <div className="w-[90%] self-center">
    <h1 className="faq_header md:w-[50%] mt-11 mb-11">Frequently
asked questions</h1>
<div className="flex flex-col self-center gap-3">
<AccordItem header="What type of businesses do you work with?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="Do you work with brands that generate revenue of <RM5K/mth?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="Can I cancel if I don’t like it?" text="Response for this question" />
            <hr className="hr_line_question " />
</div>
    </div>
  </section>
);

export default Feedback;
