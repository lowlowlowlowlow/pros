/**
 * Created by Lowlowlow on 2016/12/17.
 */

angular.module("myApp",[])

    .controller("myCtrl",function($scope){

        $scope.data=[
            {"name":"Haruka","aCont":"It seems awesome","dates":"2016-12-13","likenum":"1","imgsrc":"images/10.jpeg","onOff":false},
            {"name":"Takeru","aCont":"How do you know that is real?","dates":"2016-12-11","likenum":"94","imgsrc":"images/8.jpg","onOff":false},
            {"name":"Yuki","aCont":"Mess up everything!","dates":"2016-12-09","likenum":"88","imgsrc":"images/7.jpg","onOff":false},
            {"name":"Yuri","aCont":"Are you kidding me?","dates":"2016-12-02","likenum":"101","imgsrc":"images/2.jpg","onOff":false},
            {"name":"Kiko","aCont":"That is not real","dates":"2016-11-05","likenum":"90","imgsrc":"images/3.jpg","onOff":false},
            {"name":"Sakura","aCont":"Everybody knows it","dates":"2016-11-20","likenum":"98","imgsrc":"images/5.jpg","onOff":false},
            {"name":"Yuya","aCont":"Do not blame everything on it","dates":"2016-11-17","likenum":"88","imgsrc":"images/6.jpg","onOff":false},
            {"name":"Takumi","aCont":"Hello everyone","dates":"2016-10-30","likenum":"97","imgsrc":"images/1.jpg","onOff":false},
            {"name":"Eiko","aCont":"LOLLOLLOLOLLOL","dates":"2016-10-17","likenum":"60","imgsrc":"images/9.jpg","onOff":false},
            {"name":"Akari","aCont":"wowowowoowoowowo","dates":"2016-11-03","likenum":"32","imgsrc":"images/11.jpg","onOff":false},
            {"name":"Yui","aCont":"Come!Everybody come!","dates":"2016-11-01","likenum":"100","imgsrc":"images/4.jpg","onOff":false},
            {"name":"Haruka","aCont":"It seems awesome","dates":"2016-10-29","likenum":"1","imgsrc":"images/10.jpeg","onOff":false},
            {"name":"Takeru","aCont":"How do you know that is real?","dates":"2016-10-23","likenum":"94","imgsrc":"images/8.jpg","onOff":false},
            {"name":"Yuki","aCont":"Mess up everything!","dates":"2016-10-20","likenum":"88","imgsrc":"images/7.jpg","onOff":false},
            {"name":"Yuri","aCont":"Are you kidding me?","dates":"2016-10-12","likenum":"101","imgsrc":"images/2.jpg","onOff":false},
            {"name":"Kiko","aCont":"That is not real","dates":"2016-10-09","likenum":"90","imgsrc":"images/3.jpg","onOff":false},
            {"name":"Sakura","aCont":"Everybody knows it","dates":"2016-10-17","likenum":"98","imgsrc":"images/5.jpg","onOff":false},
            {"name":"Yuya","aCont":"Do not blame everything on it","dates":"2016-11-02","likenum":"88","imgsrc":"images/6.jpg","onOff":false},
            {"name":"Takumi","aCont":"Hello everyone","dates":"2016-11-22","likenum":"97","imgsrc":"images/1.jpg","onOff":false},
            {"name":"Eiko","aCont":"LOLLOLLOLOLLOL","dates":"2016-11-13","likenum":"60","imgsrc":"images/9.jpg","onOff":false},
            {"name":"Akari","aCont":"wowowowoowoowowo","dates":"2016-11-23","likenum":"32","imgsrc":"images/11.jpg","onOff":false},
            {"name":"Yui","aCont":"Come!Everybody come!","dates":"2016-11-02","likenum":"100","imgsrc":"images/4.jpg","onOff":false}
        ];

        //评论数 点赞数
        $scope.comments=$scope.data.length;
        $scope.likes=0;

        for(var i=0;i<$scope.data.length;i++){
            var aLike=parseInt($scope.data[i].likenum);
            $scope.likes+=aLike;
        }


        //点击显示隐藏快速评论窗口
        $scope.menuState={
            show: false
        };

        $scope.toggleMenu=function() {
            $scope.menuState.show=!$scope.menuState.show;
        }

        //分页函数
        $scope.pageNum = 1; // 请求的页码
        $scope.pageSize = 6;// 页面大小

        // 分页按钮响应函数
        $scope.page = function(p){
            $scope.pageNum = p;
        };

        //左右页面切换按钮函数
        $scope.all=Math.ceil($scope.data.length/$scope.pageSize);

        $scope.minus = function(){

            $scope.pageNum --;

            if($scope.pageNum<=1){
                $scope.pageNum=1;
            }
        };

        $scope.plus = function(){

            $scope.pageNum ++;

            if($scope.pageNum>=$scope.all){
                $scope.pageNum=$scope.all;
            }
        };

        //点赞函数
        $scope.up=function(person){

            if(!person.onOff){
                person.likenum++;
                $scope.likes++;
            }
            person.onOff=true;

        }

        //快速评论框
        $scope.username='';
        $scope.mes='';

        $scope.add=function() {
            if ($scope.username && $scope.mes) {

                $scope.time=new Date();

                $scope.year=$scope.time.getYear()+1900;
                $scope.mon=$scope.time.getMonth()+1;
                $scope.day=$scope.time.getDate();

                $scope.data.unshift({
                    "name": $scope.username,
                    "aCont": $scope.mes,
                    "dates": $scope.year+ "-" + $scope.mon + "-" + $scope.day,
                    "likenum": 0,
                    "imgsrc": "images/10.jpeg",
                    "onOff": false
                });

                $scope.username = ' ';

                $scope.mes = ' ';

                $scope.comments++;
            }else{
                alert("NAME AND CONTENT COULD NOT BE EMPTY!")
            }
        }
    })

    .filter("pageFilter", function () {
        return function (coms, pageNum, pageSize) {
            if (!angular.isArray(coms)
                || !angular.isNumber(pageNum)
                || !angular.isNumber(pageSize)) {
                return coms;
            }

            var startIndex = (pageNum - 1) * pageSize;
            if (startIndex >= coms.length) {
                return [];
            }

            var newArr = coms.slice(startIndex, startIndex + pageSize);
            return newArr;
        };
    })
    // 计算分页导航按钮的过滤器
    .filter("navFilter",function(){

        return function (coms,pageSize){
            // 获取分页的数量
            var pages = Math.ceil(coms.length / pageSize);

            // 生成一个整数数组并返回
            var navBtn = [];
            for(var i=0;i<pages;i++){
                navBtn.push(i+1);
            }
            return navBtn;
        };
    });

