//trash_talk_generator.js
//define generateTrashTalk function
function generateTrashTalk(options) {
  //定義字串
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '沒什麼']
  let target = []
  let task2 = []

  //防錯
  if (options.engineer === 'on' && options.designer === 'on' && options.entrepreneur === 'on') {
    return '一次選一個人講幹話就好了(白眼)'
  }
  if (options.engineer === 'on' && options.designer === 'on') {
    return '一次選一個人講幹話就好了(白眼)'
  }
  if (options.designer === 'on' && options.entrepreneur === 'on') {
    return '一次選一個人講幹話就好了(白眼)'
  }
  if (options.engineer === 'on' && options.entrepreneur === 'on') {
    return '一次選一個人講幹話就好了(白眼)'
  }
  if (options = {}) {
    return '跟一個人講幹話吧！'
  }


  //targer
  if (options.engineer === 'on') {
    target = ['工程師']
    let taskIndex = Math.floor(Math.random() * task.engineer.length)
    task2 = task.engineer[taskIndex]
  }
  if (options.designer === 'on') {
    target = ['設計師']
    let taskIndex = Math.floor(Math.random() * task.designer.length)
    task2 = task.designer[taskIndex]
  }
  if (options.entrepreneur === 'on') {
    target = ['創業家']
    let taskIndex = Math.floor(Math.random() * task.entrepreneur.length)
    task2 = task.entrepreneur[taskIndex]
  }

  //將候選字串依照順序放進來
  let trashTalk = ['身為一個']

  //隨機選出phrase陣列中的字串
  let phrase2 = phrase[Math.floor(Math.random() * phrase.length)]

  //用concat組合身為一個,target,task,phrase字串
  trashTalk = trashTalk + target + task2 + phrase2

  //輸出字串
  console.log(options)
  return trashTalk
}

module.exports = generateTrashTalk

