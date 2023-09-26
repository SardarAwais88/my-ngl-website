import React from 'react';

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-4">
          <img src={imageSrc} alt={title} className="mx-auto "  width="90" height="90" />
        </div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const SliderSlide = ({ imageSrc, title, content }) => {
  return (
    <div className="et_pb_slide et_pb_bg_layout_dark et_pb_media_alignment_center">
      <div className="et_pb_container clearfix">
        <div className="et_pb_slider_container_inner">
          <div className="et_pb_slide_description">
            <div className="et_pb_slide_content ">
              <p>
                <img src={imageSrc} width="80" height="68" alt="" className="wp-image-211 alignnone size-medium mx-auto" />
              </p>
              <h4 className="font-bold mb-2">{title}</h4>
              <ul className="  list-disc pl-4">
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection2 = () => {
  const features = [
    {
      title: "Simplified UX",
      imageSrc: "https://bewai.com/wp-content/uploads/2022/01/recropped-cog-pecil.svg",
      description: "Everything on screen. Number of clicks reduced to a minimum. Customization to your colors."
    },
    {
      title: "Drag & Drop documents",
      imageSrc: "https://bewai.com/wp-content/uploads/2022/01/noun-drag-and-drop-222537.svg",
      description: "Super-fast loads. Direct drag & drop of folders containing subdirectories."
    },
    {
      title: "High-performance PDF Viewer",
      imageSrc: "https://bewai.com/wp-content/uploads/2022/01/noun-share-3471960.svg",
      description: "High definition display. Super-practical features: highlighting, annotations, etc."
    }
  ];

  // const slides = [
  //   {
  //     title: "UX simplifiée",
  //     imageSrc: "https://bewai.com/wp-content/uploads/2022/01/recropped-cog-pecil.svg",
  //     content: [
  //       "Tout à l’écran.",
  //       "Nombre de clics réduit au minimum.",
  //       "Personnalisation à vos couleurs."
  //     ]
  //   },
  //   {
  //     title: "Drag & Drop des documents",
  //     imageSrc: "https://bewai.com/wp-content/uploads/2022/01/noun-drag-and-drop-222537.svg",
  //     content: [
  //       "Chargements super-rapides.",
  //       "Drag & drop direct de dossiers contenant des sous-répertoires."
  //     ]
  //   },
  //   {
  //     title: "PDF Viewer ultra-performant",
  //     imageSrc: "https://bewai.com/wp-content/uploads/2022/01/noun-share-3471960.svg",
  //     content: [
  //       "Affichage haute définition.",
  //       "Fonctionnalités hyper-pratiques : surlignage, annotations…"
  //     ]
  //   }
  // ];

  return (
    <div>
      <div className="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">User-friendly</h2>
          <div className="flex flex-wrap">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      
      {/* <div className="et_pb_row et_pb_row_14">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_24 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h2 className="text-3xl font-bold text-center mb-8">As-a-service</h2>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturesSection2;
