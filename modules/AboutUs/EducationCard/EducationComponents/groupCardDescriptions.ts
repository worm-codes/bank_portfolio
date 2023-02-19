/**
 * buraya id ve description barindiran education card obje arrayimizi ve
 * ne tur kart oldugu bilgisini yolluyoruz.
 * burada description textlerinden bir array olusturup bu arrayi
 * gruplar halinde baska bir arrayin icine atiyoruz.
 * Ornek:
 * ['test,'test','test','test','test','test'] descriptionlardan olusan array
 * application card ise 4, model kartiysa 3 lu grupluyoruz
 * islem sonunda  model kartini varsayarsak
 * [['test','test','test'],['test','test','test']] seklinde bir arraye sahip olucaz.
 * bunu da about sayfasi mobil swiper versiyonda gruplandirmak icin yapiyoruz.
 * Bu gruplari map ile donup wrapper icine alip grup seklinde swipe edicez.
 */

export default function getGroup(contents: EducationCardProps[], isAboutAppCard: boolean): string[][] {
  const descriptionArray: string[] = contents.map(content => content.description);

  /**bunu yapmamizin sebebi eger model kartiysa 3 lu, uygulama
   * kartiysa 4 lu grup yapmak istiyoruz bu yuzden for loopu buna
   * gore arttirmamiz gerekir.
   */
  const number = isAboutAppCard ? 4 : 3;

  const descriptionGroup: string[][] = [];
  for (let i = 0; i < descriptionArray.length; i += number) {
    descriptionGroup.push(descriptionArray.slice(i, i + number));
  }
  return descriptionGroup;
}
