let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
  let from = this.from;
  let to = this.to;
  from.setHours(0,0,0,0);
  to.setHours(0,0,0,0);

  function incDate(date){
    date.setDate(from.getDate() + 1);

    let day = date.getDay();
    let dom = date.getDate();

    if (dom < 10){ dom = '0' + dom; };

    if (day < 6 && day !== 0){
      return `${dom}`;
    }else{
      return `[${dom}]`;
    }
  }

  return {
    next(){
      if (from.getTime() !== to.getTime()){
        return {done: false, value: incDate(from)};
      }else{
        return {done: true};
      }
    }
  }
};
