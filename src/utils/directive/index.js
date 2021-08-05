/**
 * 自定义指令，用作按钮权限控制
 */
export default function directive(app){
 app.directive('power', {
    mounted: function(el, binding) {
      console.log('binding ', binding);
      const { value } = binding;
      value && el.remove();
    }
  });
}
