var dateNow = new Date()


export default () =>



    <div>
      {`tänään on ${dateNow.getDate()}.${dateNow.getMonth()+1}.${dateNow.getFullYear()}`}
    </div>
