#ThinyCountDown

thinyCountDown is a thiny plugin to render countdowns.

## Uber simple setup

To use the thinyCountDown plugin you just need to load the javascript file of the plugin.
Just add the following lines to the `head` of your website:

```html
<script type="text/javascript" src="/path/to/jquery-2.2.3.min.js"></script>
<script type="text/javascript" src="/path/to/thinyCountDown.js"></script>
```

Then you have to initialize the plugin with your desired configuration:

```js
$(function() {
    var timer=new thinyCountDown({
	  	el:document.getElementById('time'),
		startTimeStamp:'august 12, 2016 15:00:00',
		endTimeStamp:'august 13, 2018 15:00:00',
		onEnd:function(){
			console.log('倒计时结束');
		},
		render:function(date){
			$(this.el).append(
				'<div>'+
					'距离august 13, 2018 15:00:00剩余'+date.day+'天'+date.hour+'小时'+date.min+'分'+date.sec+'秒'+
				'</div>'
			);
		}
	});
});
```

Yep, it's easy like that! Enjoy the time you saved!

## Options

You can pass a set of these options to set a custom behaviour and look for the plugin.

<table>
    <tr>
        <th>Property (Type)</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>el</strong></td>
        <td>The thinyCountDown warp elements</td>
    </tr>
    <tr>
        <td><strong>startTimeStamp</strong></td>
        <td>The start time stamp</td>
    </tr>
    <tr>
        <td><strong>endTimeStamp</strong></td>
        <td>The end time stamp</td>
    </tr>
    <tr>
        <td><strong>render</strong></td>
        <td>With the render option you can set a function to change the output of the plugin. This function is called in the scope of the plugin, A literal object will be passed to this function as an argument, containing the remaining time parts (years, days, hours, min, sec).</td>
    </tr>
    <tr>
        <td><strong>onEnd</strong></td>
        <td>Callback function that is called when the end date is reached</td>
    </tr>
</table>

## License

`thinyCountDown` is dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL-3.0](http://opensource.org/licenses/GPL-3.0) licenses.

