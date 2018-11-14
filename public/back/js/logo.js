//表单校验
$(function(){
  //校验要求
  //1.用户名字不能为空 长度为2-6位
  //2.密码不能为空 长度位6-12位
   
  $('#form').bootstrapValidator({
    //配置校验图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    //配置校验字段
  fields:{
    username:{
     //进行多个规矩配置
     validators:{
       //名字不能为空校验
       notEmpty:{
         message:"用户名不能为空"
       },
       //长度校验
       stringLength:{
         min: 2,
         max:6,
         message:"用户名长度必须是2-6位"
       }
     }
    },
    password:{
      validators:{
        notEmpty:{
          message:"密码不能为空"
        },
        stringLength:{
          min: 6,
          max:12,
          message:"密码长度必须是6-12位"
        }
      }
    }
  }

  })


});