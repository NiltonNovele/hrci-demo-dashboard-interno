import { UploadIcon } from "@/assets/icons";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import Image from "next/image";

export function UploadPhotoForm() {
  return (
    <ShowcaseSection title="A Sua Fotografia" className="!p-7">
      <form>
        <div className="mb-4 flex items-center gap-3">
          <Image
            src="/nilton.jpeg"
            width={55}
            height={55}
            alt="Utilizador"
            className="size-14 rounded-full object-cover"
            quality={90}
          />

          <div>
            <span className="mb-1.5 font-medium text-dark dark:text-white">
              Edite a sua fotografia
            </span>
            <span className="flex gap-3">
              <button type="button" className="text-body-sm hover:text-red">
                Eliminar
              </button>
              <button className="text-body-sm hover:text-primary">
                Atualizar
              </button>
            </span>
          </div>
        </div>

        <div className="relative mb-5.5 block w-full rounded-xl border border-dashed border-gray-4 bg-gray-2 hover:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary">
          <input
            type="file"
            name="profilePhoto"
            id="profilePhoto"
            accept="image/png, image/jpg, image/jpeg"
            hidden
          />

          <label
            htmlFor="profilePhoto"
            className="flex cursor-pointer flex-col items-center justify-center p-4 sm:py-7.5"
          >
            <div className="flex size-13.5 items-center justify-center rounded-full border border-stroke bg-white dark:border-dark-3 dark:bg-gray-dark">
              <UploadIcon />
            </div>

            <p className="mt-2.5 text-body-sm font-medium">
              <span className="text-primary">Clique para carregar</span> ou arraste e
              largue aqui
            </p>

            <p className="mt-1 text-body-xs">
              SVG, PNG, JPG ou GIF (máx. 800 x 800px)
            </p>
          </label>
        </div>

        <div className="flex justify-end gap-3">
          <button
            className="flex justify-center rounded-lg border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
            type="button"
          >
            Cancelar
          </button>
          <button
            className="flex items-center justify-center rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </ShowcaseSection>
  );
}
