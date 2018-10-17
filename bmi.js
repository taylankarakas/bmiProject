
        // hesapla butonuna ulaşıyorum.
        var button = document.getElementById('submit');
        // ve DOM örneği olarak stil yazıyorum.
        button.style.margin = '0 0 50px 60px';
        
        const hello = 'Hello taylan';
        // hesapla butonuna bastığımda yapılacak olan işlemleri fonksiyon şeklinde yazıyorum.
        button.onclick = function () {


            // text'leri tanımlıyorum.
            var zayifText = `Boyunuza göre uygun ağırlıkta ${hello} olmadığınızı, zayıf olduğunuzu gösterir. 
                                Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. 
                                Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz.`;
            var normalText = 'Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.';
            var fKiloluText = 'Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar.';
            var obezText = 'Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.';
            
            //text'leri arrayde bir araya getiriyorum.
            var textArray = [zayifText,normalText,fKiloluText,obezText,obezText,obezText];

            //tanı'ları tanımlıyorum.
            var zayifTani = '<b>ZAYIF!</b><br>';
            var normalTani = '<b>NORMAL!</b><br>';
            var fkiloluTani = '<b>FAZLA KİLOLU!</b><br>';
            var obeztani1 = '<b>Şişman (Obez) - I. Sınıf!</b><br>';
            var obeztani2 = '<b>Şişman (Obez) - II. Sınıf!</b><br>';
            var obeztani3 = '<b>Şişman (Obez) - III. Sınıf!</b><br>';

            //tanı'ları arrayde bir araya getiriyorum.
            var taniArray = [zayifTani,normalTani,fkiloluTani,obeztani1,obeztani2,obeztani3];

            //degerleri array şeklinde yazıyorum.
            var degerler = [[0,18.49],[18.5,24.99],[25,29.99],[30,34.99],[35,44.99],[45, false]]

            // input değerlerimi alıyorum.
            var boy = document.getElementById('tall').value;
            var kilo = document.getElementById('kilograms').value;

            // result alanımı da değişkene atıyorum.
            var sonuc = document.getElementById('resultText');

            //burada hesaplamayı yapıyorum. sıfırlardan kurtulmak için sonucu 10000 ile çarpıyorum.
            var calculation = (parseInt(kilo) / Math.pow(parseInt(boy),2)) * 10000;
            console.log(calculation);
            

            // for loop ile kullanıcıya sonucu gösteriyorum.
            for(var i in degerler) {
                if ( 
                    (calculation >= degerler[i][0] && calculation <= degerler[i][1]) || 
                    (calculation >= degerler[i][0] && degerler[i][1] === false)
                ) {
                    sonuc.innerHTML = taniArray[i] + textArray[i];
                }
            }

        }
            
        
        // yeni value'ları almadan önce input'u ve resultText'i temizlemek için bir fonksiyon yazıyorum.
        var clearbuton = document.getElementById('clear');
        clearbuton.onclick = function () {
            var tall = document.getElementById('tall').value = '';
            var kilograms = document.getElementById('kilograms').value = '';
            var result = document.getElementById('resultText').innerHTML = '';
            
        }
        