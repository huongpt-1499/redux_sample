3 yếu tố quan trọng nhất khi xây dựng bất kì ứng dụng redux nào :

* store
* reducer
* action

Hades đến NGÂN HÀNG, gặp THU NGÂN và RÚT TIỀN

=> Kho tiền ngân hàng có thể hiểu như store trong Redux.
=> Rút tiền có thể hiểu như một action trong Redux.
=> Người thu ngân ở quán đóng vai trò Reducer.

Tóm lại, bạn có thể hiểu như sau : Hades muốn thực hiện rút tiền (action), Hades cần thông báo vs thu ngân (Reducer),
thu ngân đóng vai trò giao tiếp với kho của ngân hàng (store).
Trong redux, nếu bạn muốn cập nhật state của ứng dụng, bàn cần chuyển action của mình đến reducer - người thu ngân của bạn.
Quá trình này thường được gọi là dispatch một action (gửi đi một hành động).

Các reducer sẽ biết phải làm gì. Ví dụ, nó sẽ nhận hành động có kiểu (type) là WITHDRAW_MONEY và đảm bảo rằng bạn lấy được tiền.
Còn nói trong ngôn ngữ của Redux, số tiền mà bạn rút được là state của bạn.
Vì thế, reducer biết phải làm gì, và nó luôn luôn trả về một state mới.

#1 Create action

#2 Create Reducer

#3 Config Store