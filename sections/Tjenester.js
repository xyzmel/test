import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Tjenester = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TJENESTER' /> <br />
            <br />
            <Title title='Unike teknologier og moderne tilnærming' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tjenester
