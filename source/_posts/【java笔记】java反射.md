---
title: 【java笔记】java反射
date: 2018-12-03 13:45:29
tags:
    java笔记
categories:
    java笔记
---

https://blog.csdn.net/sinat_38259539/article/details/71799078

### 反射是框架设计的灵魂

使用的前提条件：必须先得到代表的字节码的Class，Class类用于表示.class文件（字节码））

#### 一、反射的概述
JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。
要想解剖一个类,必须先要获取到该类的字节码文件对象。而解剖使用的就是Class类中的方法.所以先要获取到每一个字节码文件对应的Class类型的对象.

以上的总结就是什么是反射
+ 反射就是把java类中的各种成分映射成一个个的Java对象
例如：一个类有：成员变量、方法、构造方法、包等等信息，利用反射技术可以对一个类进行解剖，把个个组成部分映射成一个个对象。


#### 三、反射的使用

##### 1、获取Class对象的三种方式
+ 1.1 Object ——> getClass();
+ 1.2 任何数据类型（包括基本数据类型）都有一个“静态”的class属性
+ 1.3 通过Class类的静态方法：forName（String  className）(常用)

其中1.1是因为Object类中的getClass方法、因为所有类都继承Object类。从而调用Object类来获取


```
package fanshe;
/**
 * 获取Class对象的三种方式
 * 1 Object ——> getClass();
 * 2 任何数据类型（包括基本数据类型）都有一个“静态”的class属性
 * 3 通过Class类的静态方法：forName（String  className）(常用)
 *
 */
public class Fanshe {
    public static void main(String[] args) {
        //第一种方式获取Class对象  
        Student stu1 = new Student();//这一new 产生一个Student对象，一个Class对象。
        Class stuClass = stu1.getClass();//获取Class对象
        System.out.println(stuClass.getName());
        
        //第二种方式获取Class对象
        Class stuClass2 = Student.class;
        System.out.println(stuClass == stuClass2);//判断第一种方式获取的Class对象和第二种方式获取的是否是同一个
        
        //第三种方式获取Class对象
        try {
            Class stuClass3 = Class.forName("fanshe.Student");//注意此字符串必须是真实路径，就是带包名的类路径，包名.类名
            System.out.println(stuClass3 == stuClass2);//判断三种方式是否获取的是同一个Class对象
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        
    }

```

**注意：在运行期间，一个类，只有一个Class对象产生。**

三种方式常用第三种，第一种对象都有了还要反射干什么。第二种需要导入类的包，依赖太强，不导包就抛编译错误。一般都第三种，一个字符串可以传入也可写在配置文件中等多种方法。