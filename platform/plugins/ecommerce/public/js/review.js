$((function(){function e(e){var r="";return $.each(e,(function(e,a){r+=a+"<br />"})),r}var r,a,t;$.rating&&$("#rating").rating({size:"xs"}),r=[],a=function(e){for(var a=new ClipboardEvent("").clipboardData||new DataTransfer,o=0,n=r;o<n.length;o++){var i=n[o];a.items.add(i)}e.files=a.files,t(e)},t=function(e){var r=$(".ecommerce-image-upload__text"),a=$(e).data("max-files"),t=e.files.length;a?(t>=a?r.closest(".ecommerce-image-upload__uploader-container").addClass("d-none"):r.closest(".ecommerce-image-upload__uploader-container").removeClass("d-none"),r.text(t+"/"+a)):r.text(t);var o=$(".ecommerce-image-viewer__list"),n=$("#ecommerce-review-image-template").html();if(o.addClass("is-loading"),o.find(".ecommerce-image-viewer__item").remove(),t){for(var i=t-1;i>=0;i--)o.prepend(n.replace("__id__",i));for(var c=function(r){var a=new FileReader;a.onload=function(e){o.find(".ecommerce-image-viewer__item[data-id="+r+"]").find("img").attr("src",e.target.result)},a.readAsDataURL(e.files[r])},s=t-1;s>=0;s--)c(s)}o.removeClass("is-loading")},$(document).on("change",".ecommerce-form-review-product input[type=file]",(function(e){e.preventDefault();var t=this,o=$(t),n=o.data("max-size");Object.keys(t.files).map((function(e){if(n&&t.files[e].size/1024>n){var a=o.data("max-size-message").replace("__attribute__",t.files[e].name).replace("__max__",n);MartApp.showError(a)}else r.push(t.files[e])}));var i=r.length,c=o.data("max-files");c&&i>c&&r.splice(i-c-1,i-c),a(t)})),$(document).on("click",".ecommerce-form-review-product .ecommerce-image-viewer__icon-remove",(function(e){e.preventDefault();var t=$(e.currentTarget).closest(".ecommerce-image-viewer__item").data("id");r.splice(t,1);var o=$(".ecommerce-form-review-product input[type=file]")[0];a(o)})),$(document).on("submit",".ecommerce-form-review-product",(function(r){r.preventDefault(),r.stopPropagation();var a=$(r.currentTarget),t=a.find("button[type=submit]"),o=a.find("input[name=product_id]").val();$.ajax({type:"POST",cache:!1,url:a.prop("action"),data:new FormData(a[0]),contentType:!1,processData:!1,beforeSend:function(){t.prop("disabled",!0).addClass("loading"),a.find(".alert-message").removeClass("alert-success").addClass("d-none alert-warning")},success:function(e){if(e.error)a.find(".alert-message").html(e.message).removeClass("d-none");else{a.find("textarea").val(""),$(".ecommerce-product-item[data-id="+o+"]").find(".ecommerce-product-star").removeClass().addClass("text-success mt-2").html(e.message);var r=$("#product-review-modal");r.length?r.modal("hide"):a.find(".alert-message").removeClass("alert-warning d-none").addClass("alert-success").html(e.message)}},error:function(r){var t=function(r){var a="";return void 0===r.errors||Array.isArray(r.errors)?void 0!==r.responseJSON?void 0!==r.responseJSON.errors?422===r.status&&(a=e(r.responseJSON.errors)):void 0!==r.responseJSON.message?a=r.responseJSON.message:$.each(r.responseJSON,(function(e,r){$.each(r,(function(e,r){a+=r+"<br />"}))})):a=r.statusText:a=e(r.errors),a}(r);a.find(".alert-message").html(t).removeClass("d-none")},complete:function(){t.prop("disabled",!1).removeClass("loading")}})})),$(document).on("click",".ecommerce-product-star .ecommerce-icon",(function(e){var r=$(e.currentTarget),a=r.closest(".ecommerce-product-item"),t=$("#product-review-modal"),o=t.find("form");t.find(".ecommerce-product-image").attr("src",a.find(".ecommerce-product-image").attr("src")),t.find(".ecommerce-product-name").text(a.find(".ecommerce-product-name").text()),o.find("input[name=star][value="+r.data("star")+"]").prop("checked",!0).trigger("change"),o.find("input[name=product_id]").val(a.data("id")),t.modal("show")})),$(document).on("hidden.bs.modal","#product-review-modal",(function(e){var r=$(e.currentTarget);r.find(".ecommerce-produt-image").attr("src",""),r.find(".ecommerce-produt-name").text(""),r.find("input[name=product_id]").val("")}))}));