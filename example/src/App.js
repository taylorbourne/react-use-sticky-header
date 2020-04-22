import React from "react";

import { useStickyHeader } from "react-use-sticky-header";

const App = () => {
  const [setHeaderRef] = useStickyHeader(50, { headerDetached: 'header--detached-custom' });
  return (
    <div>
      <div className="welcome">
        <p>Welcome to the <em>use-sticky-header</em> demo</p>
      </div>
      <div className="header" ref={setHeaderRef}>
        <div className="header__container"><p>Sticky Header</p></div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          mollis leo. Sed pellentesque odio diam, in ultrices augue tincidunt
          eget. Donec in porttitor ex, tempor cursus turpis. Duis pretium, magna
          ut sodales semper, justo augue efficitur risus, eget suscipit odio leo
          at neque. Integer efficitur accumsan aliquam. Etiam ut quam ut erat
          viverra ullamcorper eu non elit. In quis egestas odio. Sed auctor nunc
          arcu. Maecenas congue et eros quis pharetra.
        </p>
        <p>
          Nullam et congue quam. Praesent pretium hendrerit ullamcorper. Etiam
          eget orci ac lorem feugiat aliquam blandit semper mi. Donec malesuada
          quam sit amet justo posuere finibus. Fusce vel facilisis mauris. Nullam
          aliquam id diam in finibus. Curabitur mollis ligula sit amet dolor
          molestie, vel euismod tellus molestie. Sed non lectus pellentesque,
          cursus mi ut, fermentum lorem. Suspendisse pulvinar sit amet massa sed
          feugiat. Pellentesque sed iaculis ante. Nunc fringilla arcu vel mi
          elementum scelerisque. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Nam elementum finibus commodo. Vivamus tellus lectus, vulputate vel
          malesuada vitae, volutpat sed sem. Curabitur rhoncus risus non sem
          luctus, id pulvinar tortor interdum. Morbi eleifend dolor sed quam
          consectetur, vel imperdiet dolor venenatis. Duis vitae aliquet arcu. Sed
          tempus est vel ex auctor sodales. Etiam iaculis metus non leo suscipit,
          ac mollis metus posuere. Sed ut magna accumsan, faucibus mi eu,
          pellentesque enim. Suspendisse eros sem, ultricies sit amet scelerisque
          non, lobortis ac tortor. Ut felis nibh, mollis sit amet iaculis id,
          pharetra nec ex.
        </p>
        <p>
          Vivamus interdum magna lorem, vel viverra augue bibendum non. Praesent
          placerat, velit sit amet facilisis bibendum, mauris lectus tincidunt
          ipsum, vitae cursus odio quam tempor risus. Duis fringilla, felis nec
          aliquet dictum, arcu est ornare dolor, vitae scelerisque turpis lorem ac
          tortor. Vivamus suscipit, lectus ultricies dapibus posuere, arcu risus
          sollicitudin ante, in vulputate arcu ipsum ac quam. Maecenas quis dictum
          augue, eu rhoncus purus. In hac habitasse platea dictumst. Vivamus nibh
          felis, efficitur in odio sed, pulvinar porta ante. Proin quis ipsum
          turpis. Nunc nisl mi, imperdiet vitae suscipit in, tristique ut nulla.
          Nunc maximus eros ac nulla pharetra, ac tincidunt lorem fringilla.
          Curabitur in ipsum venenatis, mollis nisl quis, iaculis ligula. Donec
          commodo sapien quis lacinia eleifend. Nulla vel purus sapien. Nulla
          euismod viverra nibh, eget fermentum mauris suscipit non.
        </p>
        <p>
          Mauris cursus posuere nisi, eget ultrices ipsum ultrices vitae.
          Suspendisse potenti. Quisque non lacus in augue feugiat varius. Maecenas
          vel nibh auctor, ultricies turpis a, dictum ante. Donec consequat rutrum
          nibh, at luctus eros consequat eu. Praesent nec erat interdum dui
          commodo efficitur. Ut vel ipsum a mi viverra viverra non in leo. Nullam
          fringilla mauris sollicitudin, feugiat lorem vel, cursus augue. Duis
          hendrerit vestibulum velit, at vehicula nisl auctor ut. Nunc sed nisl
          placerat, hendrerit quam et, tincidunt augue. Nulla a pulvinar nisi, vel
          fermentum tellus. Quisque faucibus orci eget tortor iaculis bibendum.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Sed id posuere leo, vel cursus sapien. Mauris quis
          urna hendrerit, facilisis elit eget, tempus odio.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer in
          orci quam. Aenean porta mauris in consequat interdum. Donec eu efficitur
          urna. Aenean et lacus tempus est ultricies scelerisque eget ac tellus.
          Maecenas tellus mi, consectetur vel erat sit amet, posuere posuere
          lectus. Ut malesuada diam pellentesque dui faucibus tincidunt.
        </p>
        <p>
          Aenean a egestas quam, nec rhoncus turpis. Fusce congue cursus ipsum, in
          bibendum mauris sollicitudin in. Aliquam ut gravida lacus. Donec non
          justo ultrices, ullamcorper diam eget, viverra massa. Aliquam lacinia
          bibendum neque auctor sodales. Praesent nec augue viverra, aliquet ipsum
          at, pretium eros. Curabitur vitae neque ex. Integer in est quis leo
          sodales tincidunt. Proin vestibulum vehicula fringilla. Vivamus porta
          suscipit neque vel tempus. Maecenas posuere euismod eros nec sagittis.
          Etiam imperdiet eu odio et hendrerit. Vestibulum consectetur, ligula
          vulputate volutpat congue, dui lorem tincidunt lorem, quis gravida nunc
          sem et massa.
        </p>
        <p>
          Aenean ut tortor a enim aliquet malesuada. Maecenas volutpat, magna eu
          dignissim consectetur, risus nisl vestibulum quam, quis vehicula tellus
          turpis sit amet purus. Nullam et est consectetur, fringilla ex at,
          aliquet lorem. Donec eget nisl id eros eleifend lacinia viverra eu odio.
          Quisque volutpat ultricies odio, id congue justo. Nunc suscipit sit amet
          velit ut faucibus. Nullam eget dolor ac ex viverra dapibus. Quisque vel
          quam a risus sodales maximus. Suspendisse aliquam lorem id leo laoreet
          lacinia. Aenean congue ultricies risus, ac accumsan turpis porta id. Sed
          pulvinar dolor quis eros venenatis viverra. Vivamus quis eros suscipit,
          viverra ipsum ac, finibus massa. Sed aliquet egestas urna ac laoreet.
        </p>
        <p>
          Suspendisse potenti. Mauris rutrum ac massa nec vestibulum. Pellentesque
          pellentesque quam lorem, in facilisis enim tincidunt eget. Nulla sodales
          ante at convallis ultricies. Phasellus a congue turpis. Fusce ante diam,
          mattis eu sodales blandit, luctus et purus. Curabitur nec felis enim.
          Morbi non purus porttitor, vulputate ipsum non, eleifend lorem. Sed
          tincidunt aliquet imperdiet. Quisque sit amet consectetur nunc. Fusce
          semper nisi id risus iaculis, nec sagittis sem dignissim. Donec
          pellentesque aliquet neque, at finibus mauris luctus eu. Maecenas id
          quam at tortor ullamcorper faucibus in vitae odio. Etiam magna augue,
          sollicitudin non eros at, sagittis maximus ante.
        </p>
        <p>
          Sed ac interdum turpis, non suscipit nibh. Ut cursus risus sit amet
          molestie vehicula. Donec risus libero, finibus et eros vel, tempus
          euismod velit. Aenean ante risus, bibendum ut pellentesque id, varius
          vel nisl. Curabitur mi arcu, lobortis tincidunt semper vitae, consequat
          at neque. Proin fringilla mauris ac magna porttitor, ut auctor neque
          venenatis. Nam enim tellus, feugiat id ipsum ut, hendrerit ullamcorper
          velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Curabitur feugiat elit sapien, eget sodales lorem
          facilisis quis. Proin facilisis ipsum arcu, at cursus lorem rutrum quis.
          Phasellus felis est, ultricies et dui ac, congue euismod libero. Sed
          ipsum libero, gravida vel nunc nec, accumsan luctus dui. Nunc ultricies
          neque id massa pulvinar dignissim. Vestibulum vulputate tincidunt augue
          id porta. Suspendisse maximus, purus vel auctor mollis, dui risus
          vestibulum sapien, non pharetra nisl justo a sapien. In hac habitasse
          platea dictumst.
        </p>
        <p>
          Cras dui erat, finibus vitae porttitor vitae, dictum quis sem. Nam
          convallis nunc at sodales consequat. Morbi at vestibulum dolor. Praesent
          diam risus, tincidunt vitae efficitur sit amet, vehicula sed nibh.
          Vivamus rutrum mauris orci, vitae sagittis lectus dapibus id. Ut
          consectetur lacus a nulla tincidunt, eu maximus neque rutrum. Praesent
          consectetur luctus luctus. Integer imperdiet molestie est ac vehicula.
          Suspendisse vel diam efficitur, semper quam at, cursus libero.
          Pellentesque metus dolor, tincidunt et rhoncus sit amet, bibendum in
          nunc. Mauris turpis leo, iaculis a justo et, sodales volutpat lorem.
          Pellentesque tincidunt tincidunt hendrerit. Curabitur eu enim massa.
          Nullam vel metus ex. Proin non faucibus nunc, sed cursus nibh.
        </p>
        <p>
          Vivamus commodo ex non lectus tempus venenatis egestas a lectus. Etiam
          convallis mi et magna auctor, id gravida arcu bibendum. Morbi id
          tincidunt odio. Phasellus hendrerit felis nec risus aliquet fringilla.
          Vivamus ultrices, mi in vehicula rutrum, nisi ipsum suscipit dui, eu
          blandit massa neque ultricies ante. Sed rutrum fringilla odio quis
          maximus. Maecenas quis pretium ex. Nulla interdum, neque vel auctor
          suscipit, nulla augue pretium risus, ac vestibulum nisi nisl in ex.
          Phasellus pellentesque viverra lacus et hendrerit. Duis vel euismod
          erat, ut iaculis magna. Suspendisse tristique augue non ante semper
          cursus. Phasellus pretium dolor nulla, non efficitur ex rhoncus eu.
        </p>
        <p>
          Donec condimentum, purus auctor sollicitudin accumsan, libero urna
          vestibulum odio, ut tempus ante ligula et risus. Donec elementum porta
          euismod. Aenean vehicula, diam ut gravida tempus, urna dolor viverra
          leo, ut cursus dui quam eu orci. Praesent finibus felis vitae tincidunt
          cursus. Vestibulum vitae odio consectetur, rhoncus augue quis, efficitur
          dolor. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec ut est eu nibh mattis fermentum id
          sed libero. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Quisque ipsum massa, venenatis eget
          fringilla eu, dignissim non massa.
        </p>
        <p>
          Morbi nec malesuada nulla. Nunc efficitur dui id nibh pretium, at tempor
          mauris lacinia. Aenean semper nibh eu imperdiet scelerisque. Nunc
          lobortis a orci id tempor. Sed ultricies risus id egestas luctus. Nam
          suscipit nibh vel quam vestibulum, nec luctus purus ultrices. Etiam
          egestas nibh sed eros tincidunt, eu condimentum tortor vestibulum.
        </p>
        <p>
          Mauris porttitor luctus congue. Vestibulum hendrerit lorem at enim
          rutrum tristique. In scelerisque vulputate justo a posuere. Praesent
          pulvinar enim pulvinar eros laoreet, vitae rhoncus sapien aliquam. Nunc
          nec turpis porta, pulvinar ligula sit amet, consequat arcu. Nunc
          consectetur suscipit odio, vel aliquet neque malesuada sit amet.
          Phasellus mollis dui urna. Quisque vehicula dui tincidunt, lobortis
          tortor ut, finibus quam. Aliquam venenatis volutpat leo, sed blandit
          elit finibus a. Ut ullamcorper nisl sed augue interdum posuere.
        </p>
        <p>
          Donec scelerisque nisl ante, in imperdiet ligula suscipit at. Vestibulum
          sem sapien, ullamcorper vel est a, fringilla finibus leo. Ut vitae
          porttitor dolor. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Curabitur lorem enim, iaculis vitae erat
          eget, fringilla aliquam eros. Curabitur tincidunt ex non imperdiet
          ultricies. Aenean ullamcorper lobortis nibh hendrerit egestas. Etiam a
          blandit dolor. Curabitur egestas massa ut quam efficitur condimentum.
          Donec quis turpis auctor, commodo nisl vitae, imperdiet velit. Quisque
          vel lobortis mauris.
        </p>
        <p>
          Sed nec ipsum est. Pellentesque vel fermentum leo, id lobortis ligula.
          Integer vehicula quam velit, a vehicula elit viverra ut. Vestibulum
          fermentum ex porta consectetur interdum. Cras mollis ex vel mauris
          egestas lobortis. Sed tellus massa, fringilla at tincidunt auctor,
          lobortis a diam. Sed vitae diam luctus, cursus est at, semper turpis.
          Proin nibh sapien, vulputate semper erat eget, suscipit ullamcorper
          eros. Curabitur porta facilisis nulla, tincidunt vestibulum ligula
          sagittis at.
        </p>
        <p>
          Nam rutrum magna vitae turpis rhoncus aliquet. Nam eget ultricies ante,
          eu tempor felis. Cras non augue elementum, pellentesque leo non, commodo
          urna. Morbi a fermentum sapien, ut bibendum mauris. Fusce fringilla
          fermentum enim ut auctor. Quisque at tellus luctus, vehicula leo nec,
          posuere dui. Nam sodales odio ut nibh laoreet, nec tincidunt ante
          porttitor. Phasellus a rhoncus tellus. Duis ac malesuada est. Sed in
          dapibus risus. Vestibulum et arcu vel velit commodo consectetur.
          Phasellus justo risus, fermentum sed euismod dapibus, pellentesque nec
          massa. Aenean bibendum enim dolor, ut dapibus risus commodo non. Integer
          convallis sodales ligula, ut convallis libero maximus et. Aliquam id
          nisl nisl.
        </p>
        <p>
          Etiam tincidunt augue at diam volutpat vulputate sed a odio. Ut mollis
          dapibus massa sit amet sagittis. Maecenas tempus urna sed velit aliquet
          mattis. Donec at aliquet lectus. Vestibulum imperdiet ante sed lectus
          euismod euismod. Nunc cursus sit amet sem et tincidunt. Etiam eget
          turpis vitae libero tristique venenatis. Aliquam non turpis mollis,
          vulputate nisl sed, lobortis metus. Fusce at lorem in purus fringilla
          vehicula. Phasellus elementum mollis purus id condimentum. Fusce quis
          suscipit massa. Nullam mollis tortor vitae nisl gravida aliquam.
          Phasellus iaculis diam et luctus cursus.
        </p>
        <p>
          Ut vitae mollis urna. Ut felis quam, pretium non libero ut, tempor
          lacinia nunc. Ut lorem metus, vulputate in elit sit amet, sollicitudin
          semper odio. Donec non ipsum nec ante faucibus sagittis ac nec nisl. Ut
          fermentum viverra mauris, ac placerat ante interdum a. Nunc iaculis
          risus in eros condimentum feugiat. Sed turpis leo, placerat vel
          dignissim ut, venenatis vel nibh. Nam a justo quis mauris mattis
          lobortis. Sed sodales luctus massa, non porttitor leo varius in.
          Maecenas porttitor libero ac dui dictum, non vestibulum augue pharetra.
          Suspendisse potenti. Mauris eu ipsum elementum, porta augue eget, ornare
          turpis. Duis congue dui ac congue iaculis. Aliquam maximus finibus
          vestibulum.
        </p>
      </div>
    </div>
  );
};
export default App;
