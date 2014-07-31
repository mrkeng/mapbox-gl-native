#include <mbgl/renderer/raster_bucket.hpp>
#include <mbgl/renderer/painter.hpp>

using namespace mbgl;

RasterBucket::RasterBucket()
    : raster(std::make_shared<Raster>()) {
}

RasterBucket::~RasterBucket() {
}

void RasterBucket::render(Painter &painter, std::shared_ptr<StyleLayer> layer_desc, const Tile::ID &id) {
    painter.renderRaster(*this, layer_desc, id);
}

bool RasterBucket::setImage(const std::string &data) {
    return raster->load(data);
}

std::shared_ptr<Raster> RasterBucket::getImage() {
    return raster;
}

void RasterBucket::drawRaster(RasterShader& shader, VertexBuffer &vertices, VertexArrayObject &array) {
    // texture bound by raster tile atlas
    shader.setImage(0);
    array.bind(shader, vertices, BUFFER_OFFSET(0));
    glDrawArrays(GL_TRIANGLES, 0, (GLsizei)vertices.index());
}

bool RasterBucket::hasData() const {
    return raster->isLoaded();
}
