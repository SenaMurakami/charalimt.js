$(function() {

  // wpなどで文字列を引っ張って来た時の文字数制限

  const $element; //文字数制限かける要素 例:$('p')
  const charaLimit = 40; // 何文字で制限するか
  let thisItemName;
  let nameCnt;

  $element.each(function() {
    nameCnt = thisItemName.split('').length; // 文字を一つづつ分割して文字数をカウント

    let limitItemName = (function() {
			if(nameCnt >= charaLimit) return thisItemName.split('', charaLimit).join('') + '...';
			return thisItemName;
		})();

    // limitItemName が文字数制限された後の文字列
    console.log(limitItemName);

  });


});